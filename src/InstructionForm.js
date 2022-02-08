import { useState } from 'react';

export default function InstructionForm({ instructions, setInstruction }) {
  const [instructionInForm, setInstructionInForm] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setInstruction([...instructions, instructionInForm]);
    setInstructionInForm('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
        <button>Submit</button>

      </form>
    </section>
  );
}
