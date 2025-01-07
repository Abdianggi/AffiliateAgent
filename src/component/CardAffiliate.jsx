import React from 'react';
import CardBasic from './CardBasic';

const CardAffiliate = ({ status, statusColor, companyName, resellerId, qrText, qrColor, details }) => {
    return (
        <div className="bg-transparent py-3 px-5 shadow-[0_-9px_9px_rgba(0,0,0,0.1)] rounded-md mt-6">
            <div
                className={`text-xs font-extralight text-[${statusColor}] bg-[${statusColor}1A] inline py-[0.1rem] px-1 rounded-full`}
            >
                {status}
            </div>
            <div className="flex justify-between mt-2">
                <div>
                    <p className="text-xs text-[#004174]">Affiliation company : </p>
                    <p className="text-sm sm:text-lg text-[#004174] font-semibold">{companyName}</p>
                    <p className="text-[#00000080] text-[0.6rem] sm:text-xs">Reseller ID : {resellerId}</p>
                </div>
                <div className={`border-[${qrColor}] text-xs sm:text-sm font-light border-[1px] rounded-sm p-1 inline-flex items-center self-center`}>
                    <i className="fas fa-qrcode mr-1"></i>
                    {qrText}
                </div>
            </div>
            <div className="mt-2 w-full inline-block sm:flex">
                {details.map((detail, index) => (
                    <CardBasic
                    key={index}
                    color={detail.color}
                    title={detail.title}
                    subtitle={detail.subtitle}
                    value={detail.value}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardAffiliate;