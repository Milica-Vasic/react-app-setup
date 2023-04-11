import { useEffect, useState } from 'react';

interface NewCompProps {
  text: string;
}

const NewComp: React.FC<NewCompProps> = ({ text }) => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(true);
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      {isTrue && <div>it is true</div>}
    </div>
  );
};

export default NewComp;
