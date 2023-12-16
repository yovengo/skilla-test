import { ICall } from '../interfaces';

interface ICallSourceProps {
  call: ICall;
}

export const CallSource: React.FC<ICallSourceProps> = ({ call }) => {
  return <div>{call.partner_data.name}</div>;
};
