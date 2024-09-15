import React from 'react'

const BrandLogo = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <svg className="h-8 w-auto text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="hidden sm:block ml-2 text-xl font-semibold">YouTube</span>
        </div>
    )
}

export default BrandLogo