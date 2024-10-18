import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { certificates } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

// Sertifika Kartı Bileşeni (Memoized to avoid re-renders)
const Card = memo(({ index, name, image, url, description, company }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}  
      className="bg-white p-5 rounded-xl shadow-md w-full hover:scale-105 transition-transform duration-300"
    >
      {/* Sertifika Görseli */}
      <img 
        src={image} 
        className="object-cover h-[150px] w-full rounded-lg mb-4" 
        alt={`Certificate for ${name}`} 
        loading="lazy"
      />

      <div className="flex flex-col">
        {/* Sertifika Adı ile Link */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 font-semibold hover:underline"
        >
          {name}
        </a>
        
        {/* Şirket Adı */}
        <p className="text-gray-500 text-xs mt-1">{company}</p>
        
        {/* Sertifika Açıklaması */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Sertifikayı Görüntüle Butonu */}
      <div className="mt-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="text-sm bg-blue-100 text-blue-700 py-1 px-3 rounded-md hover:bg-blue-200 transition-colors duration-200">
            Sertifikayı Görüntüle
          </button>
        </a>
      </div>
    </motion.div>
  );
});

// Ana Sertifikalar Bileşeni
const Certificates = () => {
  return (
    <div className="mt-12 bg-gray-100 rounded-[20px] py-10 px-5">
      {/* Bölüm Başlığı */}
      <div className="bg-blue-50 rounded-2xl p-5 mb-8">
        <motion.div variants={textVariant()}>
          <h2 className="text-blue-800 text-2xl font-bold">
            Sertifikalarım
          </h2>
        </motion.div>
      </div>

      {/* Sertifikalar Grid Yapısı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((certification, index) => (
          <Card 
            key={certification.name} 
            index={index} 
            {...certification} 
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Certificates, "certificate");
