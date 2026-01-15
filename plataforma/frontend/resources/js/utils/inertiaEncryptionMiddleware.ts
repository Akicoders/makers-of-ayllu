import { router } from '@inertiajs/react';
import { encryptWithRSA } from '@/utils/encryption';

const originalVisit = router.visit;

const MAX_FIELD_LENGTH = 190;

// Override the visit method
// @ts-ignore - overriding internal method
router.visit = function (url: string | URL, options: any = {}) {
    const method = (options.method || 'GET').toUpperCase();
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method) && options.data && Object.keys(options.data).length > 0) {
        if ('forceFormData' in options) {
            delete options.forceFormData;
        }

        const plainData = typeof options.data === 'function' ? options.data() : options.data || {};
        const payload: Record<string, any> = {};
        const passthrough: Record<string, any> = {};

        for (const [key, value] of Object.entries(plainData)) {
            let valueStr;
            try {
                valueStr = JSON.stringify(value);
            } catch (err) {
                console.warn(`Skipping non-serializable field: ${key}`, err);
                passthrough[key] = value;
                continue;
            }

            if (valueStr && valueStr.length <= MAX_FIELD_LENGTH) {
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
