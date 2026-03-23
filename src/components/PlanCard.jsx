
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from "react-router-dom";

function PlanCard({ title, price, description, features, image, highlight = false, delay = 0 }) {
  const { toast } = useToast();
const navigate = useNavigate();

const handleRequest = () => {
  navigate("/contacto");
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 border",
        highlight ? "border-purple-300 ring-4 ring-purple-50" : "border-gray-100"
      )}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        {highlight && (
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-4 w-fit">
            MÁS POPULAR
          </span>
        )}
        
        <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">{title}</h3>
        {price && <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">{price}</div>}
        
        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
   
        <button 
          onClick={handleRequest}
          className={cn(
            "w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group",
            highlight 
              ? "bg-gray-900 text-white hover:bg-gray-800" 
              : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
          )}
        >
          Solicitar Presupuesto
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      
      </div>
    </motion.div>
  );
}

export default PlanCard;
