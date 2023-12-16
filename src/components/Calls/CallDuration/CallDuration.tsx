import { formatSecondsToMinutes } from '../../../utils/formatSecondsToMinutes';
import { ICall } from '../interfaces';

interface ICallDurationProps {
  call: ICall;
}

export const CallDuration: React.FC<ICallDurationProps> = ({ call }) => {
  return <div>{formatSecondsToMinutes(call.time)}</div>;
};
