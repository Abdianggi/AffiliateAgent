import React from 'react';
import CardBasic from './CardBasic';
import Badge from './Badge';
import { useNavigate } from 'react-router-dom';
import Button from './ButtonHybrid';

const CardAffiliate = ({ status, companyName, resellerId, qrText, qrColor, details }) => {
    const vendorSlug = companyName.toLowerCase()
    .replace(/ /g, "-") // Ganti spasi dengan tanda "-"
    .replace(/[^a-z0-9\-]/g, ""); // Hapus karakter yang bukan huruf, angka, atau "-"

    const navigate = useNavigate();
    const toVendorProfile = () => navigate(`/profile/${vendorSlug}`, {
        state: { status, companyName, resellerId, qrText, qrColor, details },
    });
    return (
        <div className="bg-transparent py-3 px-5 shadow-[0_-9px_9px_rgba(0,0,0,0.1)] rounded-md mt-6">
            <Badge 
                value={status == 1 ? 'Active' : 'Inactive'} 
                padding='py-[0.1rem] px-1'
                className="text-xs font-extralight inline"
                bgColor={status == 1 ? 'bg-hysuccess-100' : 'bg-rose-100'}
                textColor={status == 1 ? 'text-hysuccess-500' : 'text-rose-500'}
            />

            <div className="flex justify-between mt-2">
                <div>
                    <p className="text-xs text-hybrid">Affiliation company : </p>
                    <p className="text-sm sm:text-lg text-hybrid font-semibold cursor-pointer" onClick={toVendorProfile}>{companyName}</p>
                    <p className="text-[#00000080] text-[0.6rem] sm:text-xs">Reseller ID : {resellerId}</p>
                </div>
                <Button type={`button`} variant={`outline-hyprimary`} className={`text-xs sm:text-sm font-light border-[1px] rounded-sm p-1 inline-flex items-center self-center !text-black hover:!text-white`}>
                    <i className="fas fa-qrcode mr-1"></i>
                    {qrText}
                </Button>
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