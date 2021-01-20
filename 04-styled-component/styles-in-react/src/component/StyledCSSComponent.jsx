import styled, { keyframes } from 'styled-components';

export default function Styledcsscomponent(props) {

    const Blog = styled.div`
        height: 500px;
        width: 50%;
        margin: 10px auto;
        border: 1px dotted green;
    `;

    const ButtonWrapper = styled.div`
        margin: 40px auto;
        width: 40%;
    `;

    const Button = styled.button`
        border: 2px solid green;
        border-radius: 3px;
        font-size: 22px;
        color: white;
        background: ${props => props.isPrimary ? 'green' : 'white'};
        padding: 5px 10px;
        margin-left: 30px;
        &:hover {
            background: yellow;
        }
    `;

    const DangerButton = styled(Button)`
        color: red;
        font-weight: bold;
    `;
    const ReversedButton = props => <DangerButton {...props} children={props.children.split('').reverse()} />

    const rotate = keyframes`
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    `;

    const RotateComponent = styled.div`
        display: inline-block;
        animation: ${rotate} 2s linear infinite;
        padding: 2rem 1rem;
        font-size: 2rem;
    `;

    return (
        <div>
            <Blog >
                <ButtonWrapper>
                    <Button isPrimary={false}>Cancel</Button>
                    <Button isPrimary={true}>OK</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <DangerButton isPrimary={false}>Danger Button</DangerButton>
                    <ReversedButton isPrimary={false}>Danger Button</ReversedButton>
                </ButtonWrapper>
                <RotateComponent>hello 🤭  jelly </RotateComponent>
            </Blog>
        </div>
    )
}
