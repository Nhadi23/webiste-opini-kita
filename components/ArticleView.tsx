import React from 'react';
import { Opinion } from '../types';
import { ArticleTemplate } from './ArticleTemplate';

interface ArticleViewProps {
  opinion: Opinion;
  onBack: () => void;
  onAuthorClick?: (authorName: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ opinion, onBack, onAuthorClick }) => {
  return (
    <div className="container mx-auto">
        <ArticleTemplate opinion={opinion} onBack={onBack} onAuthorClick={onAuthorClick} />
    </div>
  );
};