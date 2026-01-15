import forge from "node-forge";

const publicKeyBase64 = `
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmntF4svNUhA+Vr1l08Rf
kBRpHkVPSO6vmeQmcYcVNYJHWudthsLOnL27aFTEEhD5TFO/nmJstnAGv4qVYHON
FeVQL38doDwdut5CAp39Ymxs9sJeu2+STkVq+O5fDWZiZNjYjrN+qNitFN4t3zWV
xYylKTQ7dGTay5VFmsO15TDIl+40I97KVl+x7GyxX9bfhmKrYfUYP8+7Zm2Qel5y
tH4WmRiK5po9c4RWKId2mHBZxSb2pVvL/9vCafg99JbGRo+eSvEFnbJcj+pcU0a5
drVUDIPNRQfVorkoAjNn+51cYZQiM5f5UFE2s/NzTKCDvK0yCEiVSuKU+P645CPg
mZRom+PDSSftxBSk3UqzUp1J4ecOOEaqMc8NhILy25fvPqZPm/m+2y/cNat5wZmU
zSVPnNpRiYmxxR6AOSg/caEfgnPStWca2QNpnO6V1xyVxLUITF3crpV9HxDj+L9E
n2Fbo30C/TrxUsZbU3/sx21qh+CQz4RAs0sJLkQetXtlZl0cvM6Djrje+VJ7K2aL
bztjzleaJLhMfSF5tMqlif3+DYg8WnH5VY8zRPaaREtTGuL3H4Dw5/BpPIHuomYL
q+TOoMkn3KRFjQKujocJjMWVdO0h4pL08qWfrww4Va5VVCM7lbR/hZebLaBxg2+z
+eMgXoXIDO0/VUhMwasn6qUCAwEAAQ==
`.replace(/\s+/g, "");

function base64ToArrayBuffer(base64) {
  const binary_string = atob(base64);
  const bytes = new Uint8Array(binary_string.length);
  for (let i = 0; i < binary_string.length; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

async function encryptWithSubtleCrypto(payload) {
  const keyData = base64ToArrayBuffer(publicKeyBase64);
  const publicKey = await window.crypto.subtle.importKey(
    "spki",
    keyData,
    { name: "RSA-OAEP", hash: "SHA-256" },
    true,
    ["encrypt"]
  );
  const encoded = new TextEncoder().encode(JSON.stringify(payload));
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    encoded
  );
  return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}

function encryptWithForge(payload) {
  const publicKeyPem = `
-----BEGIN PUBLIC KEY-----
${publicKeyBase64.match(/.{1,64}/g).join("\n")}
-----END PUBLIC KEY-----
  `.trim();

  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
  const json = JSON.stringify(payload);
  const encrypted = publicKey.encrypt(json, "RSA-OAEP", {
    md: forge.md.sha256.create(),
  });
  return forge.util.encode64(encrypted);
}

export async function encryptWithRSA(payload) {
  try {
    if (window.crypto?.subtle) {
      return await encryptWithSubtleCrypto(payload);
    } else {
      console.warn("subtleCrypto no disponible, usando node-forge");
      return encryptWithForge(payload);
    }
  } catch (err) {
    console.error("Error en cifrado:", err);
    throw err;
  }
}
