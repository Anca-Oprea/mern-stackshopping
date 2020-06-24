import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const propTypes =
{
    link:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    sizeBtn:PropTypes.string.isRequired,
    lightOrDark: PropTypes.string.isRequired

}
const ButtonInternalLink = ({link,content,sizeBtn,lightOrDark})=>
    <Link to={link}>
    <Button size={sizeBtn} color={lightOrDark}>{content}</Button>
    </Link>


ButtonInternalLink.propTypes = propTypes;

export default ButtonInternalLink;