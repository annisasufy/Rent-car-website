import React from 'react';
import { ReactComponent as CompanyIcon } from '../assets/navbar/logo2.svg';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Whatsapp = () => {
    return (
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="6281239036266" />
    );
}

export default Whatsapp