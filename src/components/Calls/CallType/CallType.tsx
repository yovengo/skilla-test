import { incoming, missed, missedCall, outgoing } from './img/index';
import { ICall } from '../interfaces';

interface ICallTypeProps {
  call: ICall;
}

export const CallType: React.FC<ICallTypeProps> = ({ call }) => {
  const renderCallTypeImg = () => {
    switch (call.in_out) {
      case 0:
        return call.status === 'Дозвонился' ? outgoing : missedCall;
      case 1:
        return call.status === 'Дозвонился' ? incoming : missed;
    }
  };

  return (
    <div>
      <img src={renderCallTypeImg()} alt="" />
    </div>
  );
};
