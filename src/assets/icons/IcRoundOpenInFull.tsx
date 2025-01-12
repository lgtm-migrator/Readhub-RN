import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}
const IcRoundOpenInFull: React.FC<Props> = props => {
  const {size, color} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M21 8.59V4c0-.55-.45-1-1-1h-4.59c-.89 0-1.34 1.08-.71 1.71l1.59 1.59l-10 10l-1.59-1.59c-.62-.63-1.7-.19-1.7.7V20c0 .55.45 1 1 1h4.59c.89 0 1.34-1.08.71-1.71L7.71 17.7l10-10l1.59 1.59c.62.63 1.7.19 1.7-.7z"
      />
    </Svg>
  );
};

IcRoundOpenInFull.defaultProps = {
  size: 24,
  color: '#000',
};

export default IcRoundOpenInFull;
