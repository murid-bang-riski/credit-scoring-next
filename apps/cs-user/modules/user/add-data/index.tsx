import { CharacterScoringSection } from './ai-character-scoring';
import { IdentityScoringSection } from './ai-identity-scoring';

import React from 'react';

export const AddUserDataModul = () => {
  return (
    <div>
      <IdentityScoringSection />
      <CharacterScoringSection />
    </div>
  );
};
