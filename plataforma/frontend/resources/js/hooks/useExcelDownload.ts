import { useState } from 'react';
import axios from 'axios';

interface UseExcelDownloadReturn {
    downloading: boolean;
    downloadUrl: string | null;
    downloadFilename: string | null;
    exportExcel: (url: string, filters?: Record<string, any>) => Promise<void>;
    downloadExcel: () => void;
}

export function useExcelDownload(): UseExcelDownloadReturn {
    const [downloading, setDownloading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [downloadFilename, setDownloadFilename] = useState<string | null>(null);

    const exportExcel = async (url: string, filters: Record<string, any> = {}) => {
        setDownloading(true);
        setDownloadUrl(null);
        setDownloadFilename(null);

        const formData = new FormData();
        Object.entries(filters).forEach(([k, v]) => {
            if (v !== null && v !== undefined) {
                formData.append(k, String(v));
            }
        });

        try {
            const response = await axios.post(url, formData, {
                responseType: 'blob'
            });

            let filename = 'reporte.xlsx';
            const disposition = response.headers['content-disposition'];
            if (disposition && disposition.includes('filename=')) {
                // Handle filename extraction more robustly if needed, currently matching Vue logic
                const parts = disposition.split('filename=');
                if (parts.length > 1) {
                    filename = parts[1].replace(/['"]/g, '');
                }
            }

            const blob = new Blob([response.data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });

            setDownloadFilename(filename);
            const urlBlob = URL.createObjectURL(blob);
            setDownloadUrl(urlBlob);
        } catch (e) {
            console.error(e);
            alert('Error al exportar el Excel');
        } finally {
            setDownloading(false);
        }
    };

    const downloadExcel = () => {
        if (!downloadUrl || !downloadFilename) return;
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = downloadFilename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return {
        downloading,
        downloadUrl,
        downloadFilename,
        exportExcel,
        downloadExcel
    };
}
