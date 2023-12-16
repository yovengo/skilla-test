import { formatPhoneNumber } from '../../../utils/formatPhoneNumber';
import { ICall } from '../interfaces';

interface ICallCallerProps {
  call: ICall;
}

export const CallCaller: React.FC<ICallCallerProps> = ({ call }) => {
  return <div>{formatPhoneNumber(call.from_number)}</div>;
};
