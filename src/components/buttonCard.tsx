'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
    image: string;
    title: string;
    route: string;
}

const CardButton: React.FC<CardProps> = ({ image, title, route }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        router.push(route);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);
    
    return (
        <div className={`flex text-secondary overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
            isVisible ? 'translate-y-0 opacity-100 ' : 'translate-y-10 opacity-0'
        } transition-all ease-out duration-500 hover:bg-opacity-80 border-2 border-gray-300`} 
        >
            <h3 className=" w-full p-4 text-center text-lg">
                {title}
            </h3>
            <div className="flex items-center justify-center w-full max-w-24"><Image
                src={image}
                alt={title}
                layout="intrinsic"
                width={200}
                height={200}
                className="max-w-xs h-auto"
            /></div>
        </div>
    );
};

export default CardButton;