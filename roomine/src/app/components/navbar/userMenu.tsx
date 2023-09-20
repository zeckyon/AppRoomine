'use client'


const UserMenu = () => {

    return (
        <div>
            <ul className="flex flex-row items-center justify-between gap-16">
                <li className='flex items-center cursor-pointer'>Buscar quarto</li>
                <li className='flex items-center cursor-pointer'>Anunciar quarto</li>
                <li className='flex items-center cursor-pointer'>Sobre</li>
                <li className='flex items-center cursor-pointer'>Ajuda</li>
            </ul>
        </div>
    )
}

export default UserMenu