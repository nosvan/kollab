import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';
import { TbX } from 'react-icons/tb';
import styles from './modal.module.css';

interface ModalPopupProps {
  children: ReactNode;
  modalId: string;
  modalOpen: any;
}

function ModalPopup(props: ModalPopupProps) {
  const modalSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });
  return (
    <animated.div
      style={modalSpring}
      id={props.modalId}
      className={`fixed bg-black inset-0 bg-opacity-20 backdrop-blur-lg`}
    >
      <div
        id="innerContainer"
        className="flex justify-center items-center h-full"
      >
        <div
          className={`flex flex-col basis-5/6 md:basis-1/3 space-y-2 bg-black text-white p-2 rounded-2xl ${styles.modalchildren}`}
        >
          <div
            onClick={() => props.modalOpen(false)}
            className="flex justify-end"
          >
            <TbX className="hover:bg-stone-700 rounded-2xl cursor-pointer"></TbX>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </animated.div>
  );
}

export default ModalPopup;
