import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ProductService } from '@/service/ProductService';

const RecentSalesWidget: React.FC = () => {
    const [products, setProducts] = useState(null);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const imageBodyTemplate = (rowData: any) => {
        return <img src={`https://primefaces.org/cdn/primevue/images/product/${rowData.image}`} alt={rowData.image} width="50" className="shadow" />;
    };

    const priceBodyTemplate = (rowData: any) => {
        return formatCurrency(rowData.price);
    };

    const viewTemplate = () => {
        return <Button icon="pi pi-search" type="button" className="p-button-text"></Button>;
    };

    return (
        <div className="card">
            <div className="font-semibold text-xl mb-4">Recent Sales</div>
            <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                <Column header="Image" body={imageBodyTemplate} style={{ width: '15%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '35%' }}></Column>
                <Column field="price" header="Price" sortable style={{ width: '35%' }} body={priceBodyTemplate}></Column>
                <Column header="View" body={viewTemplate} style={{ width: '15%' }}></Column>
            </DataTable>
        </div>
    );
};

export default RecentSalesWidget;
