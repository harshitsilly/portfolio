
import useIsMobile from '../../utils/useIsMobile';
import { Box, Label ,Text} from '../../atoms';

const Wedding = () => {
    const isMobile = useIsMobile();
	return (<>
    <Box pad={isMobile ? 'xs' : 'm'} style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Label m  type="secondary" text="Ayushi & Harshit" />
    <img style={{height: isMobile ? "300px": 'auto'}} src="/images/wedding.png"></img>
    <Label m text="Coming Soon" />
    <Text bold header>
    Coming Soon
</Text>
    </Box>
      
    </>)
    

};

export default Wedding;
