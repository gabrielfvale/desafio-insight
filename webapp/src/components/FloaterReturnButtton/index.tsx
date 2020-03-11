import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';

import { Tooltip, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const FloaterReturnButtton: FunctionComponent = () => {
    const history = useHistory();

    return (
        <div className="floater-button-wrapper">
            <Tooltip autoAdjustOverflow={true} placement='right' title='Página inicial'>
                <Button
                    size="large"
                    shape="circle"

                    onClick={() => history.push('/')}
                    className="floater-button">
                    <FontAwesomeIcon icon="arrow-left" />
                </Button>
            </Tooltip>
        </div>
    );

}

export default FloaterReturnButtton;
