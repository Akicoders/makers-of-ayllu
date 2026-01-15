import { router } from '@inertiajs/vue3';
import { encryptWithRSA } from '@/utils/encryption';

const originalVisit = router.visit;

const MAX_FIELD_LENGTH = 190;

router.visit = function (url, options = {}) {
    const method = (options.method || 'GET').toUpperCase();
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method) && options.data && Object.keys(options.data).length > 0) {
        if ('forceFormData' in options) {
            delete options.forceFormData;
        }

        const plainData = typeof options.data === 'function' ? options.data() : options.data || {};
        const payload = {};
        const passthrough = {};

        for (const [key, value] of Object.entries(plainData)) {
            let valueStr;
            try {
                valueStr = JSON.stringify(value);
            } catch (err) {
                console.warn(`Skipping non-serializable field: ${key}`, err);
                passthrough[key] = value;
                continue;
            }

            if (valueStr?.length <= MAX_FIELD_LENGTH) {
                payload[key] = value;
            } else {
                passthrough[key] = value;
            }
        }

        encryptWithRSA(JSON.stringify(payload))
            .then((encryptedPayload) => {
                options.data = {
                    payload: encryptedPayload,
                    ...passthrough
                };
                originalVisit.call(router, url, options);
            })
            .catch((e) => {
                console.error('Encryption failed:', e);
                throw e;
            });

        return;
    }
    return originalVisit.call(router, url, options);
};
