import { ref } from 'vue';
import axios from 'axios';

export function useExcelDownload() {
    const downloading = ref(false);
    const downloadUrl = ref(null);
    const downloadFilename = ref(null);

    const exportExcel = async (url, filters = {}) => {
        downloading.value = true;
        downloadUrl.value = null;
        downloadFilename.value = null;

        const formData = new FormData();
        Object.entries(filters).forEach(([k, v]) => {
            if (v !== null && v !== undefined) formData.append(k, v);
        });

        try {
            const response = await axios.post(url, formData, {
                responseType: 'blob'
            });
            
            let filename = 'reporte.xlsx';
            const disposition = response.headers['content-disposition'];
            if (disposition && disposition.includes('filename=')) {
                filename = disposition.split('filename=')[1].replace(/['"]/g, '');
            }

            const blob = new Blob([response.data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });

            downloadFilename.value = filename;
            downloadUrl.value = URL.createObjectURL(blob);
        } catch (e) {
            console.error(e);
            alert('Error al exportar el Excel');
        } finally {
            downloading.value = false;
        }
    };

    const downloadExcel = () => {
        if (!downloadUrl.value || !downloadFilename.value) return;
        const a = document.createElement('a');
        a.href = downloadUrl.value;
        a.download = downloadFilename.value;
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
