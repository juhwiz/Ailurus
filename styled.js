import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #F9F8DC;
    align-items: center;
    padding: 0 33px;
`;

export const Logo = styled.Image`
    object-fit: scale-down;
    width: 100px;
    height: 100px;
    align-self: center;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #00000;
    align-self: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #00000;
    align-self: left;

`;

export const TextBody = styled.Text`
    margin-top: 30px;
    font-size: 15px;
    color: #00000;
    align-self: center;

`;    

export const LinkText = styled.Text`
    color: #1e90ff;
    text-decoration: underline;
    font-size: 16px;

`;

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
    padding: 10px 20px;
    align-self: center;
    background-color: #CE6301;
    border-radius: 5px;
`;    

export const ButtonText = styled.Text`
    color: #F9F8DC;
    font-size: 15px;
`;    

export const InputText = styled.TextInput`
    min-width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    margin-top: 20px;
`;    

export const CheckboxContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;    

export const CheckboxSquare = styled.View`
    width: 24px;
    height: 24px;
    border: 2px solid #CE6301;
    background-color: ${props => (props.checked ? '#CE6301' : 'transparent')};
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;    

export const CheckboxLabel = styled.Text`
    font-size: 16px;
    color: #333; 
`;    

export const CheckboxLogo = styled.Image`
    object-fit: scale-down;
    width: 60px;
    height: 60px;
    align-self: center;
    margin-bottom: 10px;
`;

