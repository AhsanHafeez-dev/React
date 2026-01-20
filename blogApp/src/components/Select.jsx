import React,{ useId,forwardRef } from "react"

function Select(
    {
        options,
        label,
        className = '',
        ref,
        ...props

    }
)
{

    const id = useId();
    return (
        <div className="w-[700px]">
            {label && <label htmlFor={id} className=""  >{label}</label>}
            <select ref={ref} className={`${className} px-3 py-2  rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}  id={id}>
                {options?.map(
                    el => <option key={el} value={el}> {el}  </option>
                )}
            </select>
        </div>

    )

}
 
export default forwardRef(Select);