import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      {
        instructions.map((instructions, i) => 
          <Instruction key={`${instructions}-${i}`} instructions={instructions} />)
      }
    </section>
  );
}
