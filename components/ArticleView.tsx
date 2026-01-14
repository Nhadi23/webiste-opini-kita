import React from 'react';
import { Opinion } from '../types';
import { ArticleTemplate } from './ArticleTemplate';

interface ArticleViewProps {
  opinion: Opinion;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ opinion, onBack }) => {
  // Logic layer can be added here in the future (e.g., fetch related articles, comments, analytics)
  
  return (
    <div className="container mx-auto">
        <ArticleTemplate opinion={opinion} onBack={onBack} />
    </div>
  );
};