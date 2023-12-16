import { extractTimeFromDateTime } from '../../../utils/extractTimeFromDateTime';
import { ICall } from '../interfaces';

interface ICallTimeProps {
  call: ICall;
}

export const CallTime: React.FC<ICallTimeProps> = ({ call }) => {
  return <div>{extractTimeFromDateTime(call.date)}</div>;
};
