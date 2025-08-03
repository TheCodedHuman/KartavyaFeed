import React from 'react';

function FooterFragment({ title, fragmentArray }) {

    return (
        <div className='flex flex-col mb-3'>
            <h3 className='mb-2 font-semibold text-2xl font-gummy font-medium'>{title}</h3>
            <ul className='text-sm space-y-1 list-disc pl-5 font-outfit'>
                {fragmentArray.map(({ label, info }) => (               // label improves performance for distinct keys
                    <li key={label}>
                        {label}
                        {info && <span className='text-[#D0EB00] italic text-sm'>{info}</span> }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterFragment

    