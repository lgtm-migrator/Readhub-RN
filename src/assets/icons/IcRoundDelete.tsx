import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const IcRoundDelete: React.FC<Props> = props => {
  const {size, color} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
      />
    </Svg>
  );
};

IcRoundDelete.defaultProps = {
  size: 24,
  color: '#000',
};

export default IcRoundDelete;
