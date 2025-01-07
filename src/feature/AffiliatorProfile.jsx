// BES-AF-03-7-PAGE

import { useState } from "react";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import Table from "../component/Table";
import FormModal from "../component/FormModal";
import bankData from "../data/indonesianBanks.json";

export default function AffiliatorProfile(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formFieldsEditProfile = [
        { name: "name", label: "Name", type: "text" },
        { name: "phone", label: "Phone", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "website", label: "Website", type: "text" },
        { name: "address", label: "Address", type: "textarea" },
        { name: "country", label: "Country", type: "text" },
    ];
    const defaultValuesEditProfile = {
        name: "Sinta Valela",
        phone: "(+62) 8734862362",
        email: "sintavalela736@gmail.com",
        website: "sintavaela.com",
        address: "Jalan Pondok indah padang bay no 763. Bali",
        country: "Indonesia",
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleFormSubmit = (data) => {
        console.log("Submitted data:", data);
        setIsModalOpen(false);
    };

    const optionsNewBank = bankData.map((bank) => ({
        value: bank.code,
        label: bank.name,
    }));
    console.log(optionsNewBank);
    
    const [isAddNewBankModal, setIsAddNewBankModal] = useState(false);
    const formFieldNewBank = [
        { name: "name", label: "Name", type: "text", disable: true },
        { name: "base_currency", label: "Base Currency", type: "text", disable: true },
        { name: "bank_name", label: "Bank Name", type: "select", options: optionsNewBank},
        { name: "bank_account_number", label: "Bank Account Number", type: "text" },
    ]
    const defaultValuesNewBank = {
        name: "Sinta Valela",
        base_currency: "IDR",
    };

    const handleModalNewBankClose = () => {
        setIsAddNewBankModal(false);
    };


    const profileData = [
    [
        { content: "Name", colSpan: 1 },
        { content: "Sinta Valela", colSpan: 3 },
    ],
    [
        { content: "Affiliator ID", colSpan: 1 },
        { content: "AFF001", colSpan: 1 },
        { content: "Address", colSpan: 1, rowSpan: 2 },
        { content: "Jalan Pondok indah padang bay no 763. Bali", colSpan: 1, rowSpan: 2 },
    ],
    [
        { content: "Email", colSpan: 1 },
        { content: "sintavalela736@gmail.com", colSpan: 1 },
    ],
    [
        { content: "Website", colSpan: 1 },
        { content: "sintavaela.com", colSpan: 1 },
        { content: "Country", colSpan: 1 },
        { content: "Indonesia", colSpan: 1 },
    ],
    [
        { content: "Phone", colSpan: 1 },
        { content: "(+62) 8734862362", colSpan: 1 },
        { content: "Category", colSpan: 1 },
        { content: "Freelance", colSpan: 1 },
    ],
    ];
    
    const bankHeaders = [
        { label: "Currency", key: "currency", align: "text-center" },
        { label: "Account Number", key: "accountNumber", align: "text-start" },
        { label: "Bank Name", key: "bankName", align: "text-start" },
        { label: "Status", key: "status", align: "text-center" },
        { label: "Action", key: "actions", align: "text-center" },
    ];
      

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <FormModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleFormSubmit}
                title="Account"
                formFields={formFieldsEditProfile}
                defaultValues={defaultValuesEditProfile}
            />
            <FormModal
                isOpen={isAddNewBankModal}
                onClose={handleModalNewBankClose}
                title="Add new Bank"
                formFields={formFieldNewBank}
                defaultValues={defaultValuesNewBank}
            />

           <Nav />
           <Tabs />
           <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-white px-5  lg:px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <div className="text-2xl font-medium flex mb-9">
                        <div className="w-1 h-8 mr-2 bg-[#1B8BE3] rounded-r-full"></div>
                        Affiliator Profile
                    </div>

                    {/* <Table
                        title="Basic Profile"
                        isStatic={true}
                        data={profileData}
                        onEditClick={() => console.log("Edit profile clicked")}
                    />

                    <Table
                        title={false}
                        isStatic={false}
                        headers={bankHeaders}
                        data={bankData}
                        onRemoveClick={(row) => console.log("Remove bank account clicked for:", row)}
                    /> */}

                    {/* Tabel Profile */}
                    <table className="table table-bordered w-full text-sm mb-16 border border-gray-300">
                        <tbody>
                            <tr className="bg-[#E7F3FD] font-semibold">
                                <td colSpan="2" className="p-3 border-[1.5px] border-r-0">Basic Profile</td>
                                <td colSpan="2" className="p-3 cursor-pointer border-[1.5px] border-l-0 text-right" onClick={() => setIsModalOpen(true)}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Name</td>
                                <td colSpan="3" className="p-3 border-[1.5px]">Sinta Valela</td>
                            </tr>
                            <tr>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Affiliator ID</td>
                                <td className="p-3 border-[1.5px] font-light">AFF001</td>
                                <td rowSpan="2" className="bg-[#F8F8F8] p-3 border-[1.5px]">
                                    Address
                                </td>
                                <td rowSpan="2" className="p-3 align-middle border-[1.5px]">
                                    Jalan Pondok indah padang bay no 763. Bali
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Email</td>
                                <td className="p-3 border-[1.5px] font-light">sintavalela736@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Website</td>
                                <td className="p-3 border-[1.5px] font-light">sintavaela.com</td>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Country</td>
                                <td className="p-3 border-[1.5px] font-light">Indonesia</td>
                            </tr>
                            <tr>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Phone</td>
                                <td className="p-3 border-[1.5px] font-light">(+62) 8734862362</td>
                                <td className="bg-[#F8F8F8] p-3 border-[1.5px]">Category</td>
                                <td className="p-3 border-[1.5px] font-light">Freelance</td>
                            </tr>
                        </tbody>
                    </table>


                    {/* Tabel Bank Accounts */}
                    <table className="table table-bordered w-full text-sm mb-9 border border-gray-300">
                        <thead>
                            <tr className="bg-[#E7F3FD] font-semibold">
                                <th className="p-3 border-[1.5px] border-r-0">Currency</th>
                                <th className="p-3 border-[1.5px] border-r-0 text-start">Account Number</th>
                                <th className="p-3 border-[1.5px] border-r-0 text-start">Bank Name</th>
                                <th className="p-3 border-[1.5px] border-r-0">Status</th>
                                <th className="p-3 border-[1.5px] border-l-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border-[1.5px] font-light text-center">IDR</td>
                                <td className="p-3 border-[1.5px] font-light">782463713874</td>
                                <td className="p-3 border-[1.5px] font-light">BCA – Bank Central Asia</td>
                                <td className="p-3 border-[1.5px] font-light text-center">
                                    <span className="py-1 px-5 rounded-full bg-[#3EA31A1A] text-[#3EA31A]">
                                        Active
                                    </span>
                                </td>
                                <td className="p-3 border-[1.5px] font-light text-center">
                                   <button className="bg-transparent text-[#ED1B24] font-light"><i class="fa-solid fa-trash mr-1"></i> Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3 border-[1.5px] font-light text-center">IDR</td>
                                <td className="p-3 border-[1.5px] font-light">378427874343</td>
                                <td className="p-3 border-[1.5px] font-light">BNI – Bank Negara Indonesia</td>
                                <td className="p-3 border-[1.5px] font-light text-center">
                                    <span className="py-1 px-5 bg-[#FF99001A] text-[#FF9900] rounded-full">
                                        Review
                                    </span>
                                </td>
                                <td className="p-3 border-[1.5px] font-light text-center">
                                    <button className="bg-transparent text-[#ED1B24] font-light"><i class="fa-solid fa-trash mr-1"></i> Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    {/* Tombol Add */}
                    <div className="mt-4 flex justify-end">
                        <button className="bg-[#449D44] text-white py-1 px-5 rounded-lg" onClick={() => setIsAddNewBankModal(true)}>
                        + Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}