import { Routes } from '@angular/router';
import { RegisterReciptTypeComponent } from './components/recipt-type/register-recipt-type/register-recipt-type.component';
import { ReciptTypeComponent } from './components/recipt-type/recipt-type.component';
import { CountryComponent } from './components/country/country.component';
import { CreateCountryComponent } from './components/country/create-country/create-country.component';
import { PaymentTypeComponent } from './components/payment-type/payment-type.component';
import { InsertpaymentTypeComponent } from './components/payment-type/insertpayment-type/insertpayment-type.component';
import { ModuloPagosComponent } from './components/modulo-pagos/modulo-pagos.component';
import { CategoryComponent } from './components/category/category.component';
import { AddEditCategoryComponent } from './components/category/add-edit-category/add-edit-category.component';
import { DeliveryTypeComponent } from './components/delivery-type/delivery-type.component';
import { CreateDeliveryTypeComponent } from './components/delivery-type/create-delivery-type/create-delivery-type.component';

export const routes: Routes = [
    {
        path: 'paises', component: CountryComponent,
        children: [{path: 'nuevo', component: CreateCountryComponent}]
    },
    {
        path: 'category', component: CategoryComponent,
        children: [{path: 'nuevo', component: AddEditCategoryComponent}]
    },
    {
        path:'moduloPagos',component:ModuloPagosComponent,
        children:[
            {   
                path:'ReceiptType', component: ReciptTypeComponent,
                children: [{path: 'Register', component: RegisterReciptTypeComponent}]
            },
            {
                path:'paymentType', component: PaymentTypeComponent,
                children:[{path:'registro', component: InsertpaymentTypeComponent}]
            },
            {
                path:'deliveryType', component: DeliveryTypeComponent,
                children:[{path:'registro', component: CreateDeliveryTypeComponent}]
            }
        ]
    }
];
