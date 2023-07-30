import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const FAButton = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <PaperProvider>
            <Portal>
                <FAB.Group style={styles.fab}
                    open={open}
                    visible
                    icon={open ? 'arrow-collapse-all' : 'pencil'}
                    actions={[
                        // { icon: 'pencil', onPress: () => console.log('Pressed expanded') },
                        {
                            icon: 'google-assistant',
                            label: 'Voice Assistant',
                            onPress: () => console.log('Voice Assistant'),
                        },
                    
                        {
                            icon: 'bell',
                            label: 'Notifications ',
                            onPress: () => console.log('Pressed notifications'),
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 52,
  },
})

export default FAButton;