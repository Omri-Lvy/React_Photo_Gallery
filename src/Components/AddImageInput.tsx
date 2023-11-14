import React from 'react';

type AddImageInputProps = {
    newImagesHandler: (images: File[]) => Promise<void>
}
const AddImageInput = ({newImagesHandler}:AddImageInputProps) => {

    const changeHandler = async (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (files) {
            const filesArray = Array.from(files);
            await newImagesHandler(filesArray)
        }
        e.target.value = "";
    }


    return (
        <label className="cursor-pointer text-neutral-100 flex gap-2 py-2 px-4 justify-center items-center my-4 rounded-xl h-12 relative shadow-2xl bg-purple-600 shadow-purple-800/40">
            Add Images
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <input type="file" accept="image/*" multiple={true} onChange={changeHandler} aria-hidden={true} className="hidden"/>
        </label>
    );
};

export default AddImageInput;