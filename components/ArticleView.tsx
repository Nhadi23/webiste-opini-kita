import React from 'react';
import { Opinion, Comment, User } from '../types';
import { ArticleTemplate } from './ArticleTemplate';

interface ArticleViewProps {
  opinion: Opinion;
  currentUser: User | null;
  comments: Comment[];
  onBack: () => void;
  onAuthorClick?: (authorName: string) => void;
  onAddComment: (content: string) => void;
  onLoginRequest: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ 
    opinion, 
    currentUser,
    comments,
    onBack, 
    onAuthorClick,
    onAddComment,
    onLoginRequest
}) => {
  return (
    <div className="container mx-auto">
        <ArticleTemplate 
            opinion={opinion} 
            currentUser={currentUser}
            comments={comments}
            onBack={onBack} 
            onAuthorClick={onAuthorClick}
            onAddComment={onAddComment}
            onLoginRequest={onLoginRequest}
        />
    </div>
  );
};