import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>


const WrapperProfile = styled.section`
    position: relative;
    width: 550px;
    min-height: 240px;
    margin: 10px;
    padding: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    .hr{
        ::after{
        content: "";
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${Colors.lightgrey};
        };
    }
`;

const DivIcons = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 110px;
    img {
        width: 20px;
        height: 20px;
        padding: 5px
    }

    button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        margin: 0 5px;
        background-color: transparent;
        border: none;
    }

`;

const DivProfile = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 20px;
    figure{
        color: ${Colors.textBlue}
    }

`;

const Photo = styled.img`
    width: 60px;
    height: 60px;
    position: relative;
    display: flex;
    margin: auto;
    border-radius: 50%;
    padding: 10px;
`;

const DivInfo = styled.div`
    margin-left: 10px;
    p{
        padding: 5px;
    }
`;

const AdressInfo = styled.ul`
    margin-top: 57px;
    margin-left: 40px;
    li{
    padding: 5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
        &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    button {
        width: 20px;
        height: 20px;
        color: ${Colors.white};
        font-weight: bold;
        border: none;
        border-radius: 50%;
        background-color: ${Colors.grey};
    }

`;


const EditButton = styled.button`
    position: absolute;
    right: 40px;
    top: 50px;
    width: 25px;
    height: 25px;
    padding: 3px;
    display: flex;
    justify-content: center;
    img {
        width: 15px;
    };
`;

const DivSecond = styled.div`
    display: grid;
    grid-template-columns: 135px 145px 145px;
    grid-gap: 5px;
    position: relative;
    img{
        top: 10px;
        right: 10px;
    }
    h4{
        padding: 5px;
        grid-column: 1/3;
        color: ${Colors.grey}
    }

`;
const BlueSpan = styled.span`
    font-size: ${fontSize[12]};
    color: ${Colors.textBlue};
    background-color: ${Colors.aquaBody};
    grid-column: 1;
    padding: 5px;
`;
const BlueSpan2 = styled.span`
    font-size: ${fontSize[12]};
    color: ${Colors.textBlue};
    background: ${Colors.aquaBody};
    grid-column: 2;
    padding: 5px;
`;

const DivInformation = styled.div`
    padding: 5px;
    h3{
        font-weight: 600;
        margin-top: 20px;
    }
    p{
        margin-top: 20px;
        color: ${Colors.grey};
    }
    h4{
        margin-top: 10px;
    }
    input{
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        border: none;
        color: ${Colors.black};
        background-color: ${Colors.bodycolor};
    }
`;

const DivPhoto = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${Colors.bodycolor};
    align-items: center;
    input{
        font-size: ${fontSize[14]};
        background-color: ${Colors.bodycolor};
        width: 150px;
        margin-right: 30px;
    }
    img {
        width: 20px;
        height: 20px;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;

    }
    span {
        padding: 5px;

    }`;

const DivProposals = styled.div`
    position: relative;
    padding: 5px;
    .tabelka{
        display: flex;
        flex-wrap: wrap;
        column-count: 6;
        column-width: 16%;
    }
    h2{
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    h3{
        font-size: ${fontSize[14]};
        font-weight: 600;
        width: 50px;
        margin: 10px 20px 0px 20px;
    }
    h4{
        width: 50px;
        margin: 10px 20px 10px 20px;
        font-size: ${fontSize[14]};
    }
    span{
        position: absolute;
        bottom: -10px;
        right: 5px;
        color: ${Colors.textBlue};
    }

`;

const DivAmount = styled.div`
    padding: 0 10px 10px 10px;
    margin-top: -5px;
    h2{
        font-weight: 600;
        margin-bottom: 10px;
        margin-top: 15px;
    }


    table > tr > td {
        padding: 5px 0 5px 0;
    }
    table{
        width: 100%;
    }


`;



export const Profile: FC = () => {
    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const [turnEditionProfile, setTurnEditionProfile] = useState(false);
    const [name, setName] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [city, setCity] = useState('');
    const [relation, setRelation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');



    const dispatch = useDispatch();

    useEffect(() => {
        setTurnEditionProfile(false);
        setName(usersList[9]?.name);
        setCompany(usersList[9]?.company.name);
        setCity(usersList[9]?.address.city);
        setRelation('Partner');
        setEmail(usersList[9]?.email);
        setPhone(usersList[9]?.phone);
    }, [usersList]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetSomeImg>(getSomeImg());
    }, [dispatch]);

    useEffect(() => {
        setTurnEditionProfile(false);
        setName(usersList[9]?.name);
        setCompany(usersList[9]?.company.name);
        setCity(usersList[9]?.address.city);
        setRelation('Partner');
        setEmail(usersList[9]?.email);
        setPhone(usersList[9]?.phone);
    }, [usersList])

    const inputHandler = (event: ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'name':
                setName(event.target.value);
                break;
            case 'company':
                setCompany(event.target.value);
                break;
            case 'city':
                setCity(event.target.value);
                break;
            case 'relation':
                setRelation(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'phone':
                setPhone(event.target.value);
                break;
            default:
                console.log("has no Change");
        }
    }
    const editBtn = (event: Event) => {
        const ev = ((event.target) as Element).id;
        if (ev === 'btnOnEditionProfile' || ev === 'btnOnEditionProfileImg')
            turnEditionProfile ? setTurnEditionProfile(false) : setTurnEditionProfile(true);
        console.log('przyszla poszla i nie doszla');
    }

    return (
        <WrapperProfile>
            <div className="hr">
                <DivIcons>
                    <button><img src="./media/icons/chat.png" alt="" />Message</button>
                    <button><img src="./media/icons/request.png" alt="" />Create a request</button>
                    <button><img src="./media/icons/cluster.png" alt="" />Add to a cluster</button>
                    <StyledLink to="/">
                        <button>X</button>
                    </StyledLink>
                </DivIcons>
                <DivProfile>
                    <figure>
                        <Photo src={someImg[9]?.url}></Photo>
                        <figcaption>See Profile</figcaption>
                    </figure>
                    <DivInfo>

                        {turnEditionProfile !== true ?
                            <p key='p1'>{name}</p> :
                            <input key='input1' value={name} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'name')} />
                        }
                        {turnEditionProfile !== true ?
                            <p key='p2'>{company}</p> :
                            <input key='input2' value={company} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'company')} />
                        }
                        {turnEditionProfile !== true ?
                            <p key='p3'>{city}</p> :
                            <input key='input3' value={city} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'city')} />
                        }
                        {turnEditionProfile !== true ?
                            <p key='p4'>Partner</p> :
                            <input key='input4' value={relation} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'relation')} />

                        }
                    </DivInfo>
                    <AdressInfo>
                        <EditButton id='btnOnEditionProfile' onClick={(ev: any) => editBtn(ev)}><img id='btnOnEditionProfileImg' src="./media/icons/edit.png" alt="" /></EditButton>
                        {turnEditionProfile !== true ?
                            <p key='p5'>{email}</p> :
                            <input key='input5' value={email} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'email')} />

                        }
                        {turnEditionProfile !== true ?
                            <p key='p6'>{phone}</p> :
                            <input key='input6' value={phone} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => inputHandler(event, 'phone')} />

                        }
                    </AdressInfo>
                </DivProfile>
            </div>
            <div className="hr">
                <DivSecond>
                    <EditButton id='btnOnEditionProfile' onClick={(ev: any) => editBtn(ev)}><img src='./media/icons/edit.png' alt='' /></EditButton>
                    <h4>Expertise</h4>
                    <BlueSpan>Merges and acquisition</BlueSpan>
                    <h4>Specialities</h4>
                    <BlueSpan>Cross border operation</BlueSpan>
                    <BlueSpan2>Transaction over 500M€/$</BlueSpan2>
                    <h4>Admission to practice law</h4>
                    <BlueSpan>Paris bar association</BlueSpan>
                    <BlueSpan2>Tunisian bar association</BlueSpan2>
                    <h4>Counties</h4>
                    <BlueSpan>Tunisia</BlueSpan>
                </DivSecond>
            </div>
            <div className="hr">
                <DivInformation>
                    <h3>Panel information</h3>
                    <p>Hourly fee</p>
                    <h4>610€/hour (Negociated)</h4>
                    <p>Terms & conditions</p>
                    <h4>Monthly 10k€ retainer - see with Jeanny Smith</h4>
                    <input placeholder="Attachment_lorem-ipsum.jpg" />
                    <h3>Services & projects</h3>
                    <h4>Corporate M&A and international acquisitions</h4>
                    <h3>Internatl correspondants</h3>
                    <DivPhoto>
                        <Photo src={someImg[9]?.url}></Photo>
                        <input placeholder="Fistname Lastname" />
                        <img src="./media/icons/chat.png" alt="" />
                        <span>Message</span>
                        <img src="./media/icons/network.png" alt="" />
                        <span>profile</span>

                    </DivPhoto>
                    <DivPhoto>
                        <Photo src={someImg[9]?.url}></Photo>
                        <input placeholder="Fistname Lastname" />
                        <img src="./media/icons/chat.png" alt="" />
                        <span>Message</span>
                        <img src="./media/icons/network.png" alt="" />
                        <span>profile</span>

                    </DivPhoto>
                </DivInformation>
            </div>
            <div className="hr">
                <DivProposals>
                    <h2>Proposals</h2>
                    <div className="tabelka">
                        <h3>Name</h3>
                        <h3>Entity</h3>
                        <h3>Location</h3>
                        <h3>Expertise</h3>
                        <h3>Date</h3>
                        <h3>Firm</h3>
                    </div>
                </DivProposals>
            </div>
            <div className="hr">
                <DivProposals>
                    <div className="tabelka">
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                    </div>
                    <span>See more proposals</span>
                </DivProposals>
            </div>
            <div className="hr">
                <DivProposals>
                    <h2>Internal reviews</h2>
                    <div className="tabelka">
                        <h3>Name</h3>
                        <h3>Entity</h3>
                        <h3>Location</h3>
                        <h3>Expertise</h3>
                        <h3>Date</h3>
                    </div>
                </DivProposals>
            </div>
            <div className="hr">
                <DivProposals>
                    <div className="tabelka">
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>
                        <h4>asdfasdf</h4>

                    </div>
                </DivProposals>
                <h3>See more Reviews</h3>
            </div>
            <DivAmount>
                <h2>Amount of fees</h2>
                <table>
                    <tr>
                        <td>Year</td> <td>Cost center</td> <td>Total amount</td> <td>Law firm</td>
                    </tr>
                    <tr>
                        <td>2019</td> <td>CS 153</td> <td> 3 500€</td> <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>2018</td> <td>CS 153</td> <td> 9 500€</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td>2017</td> <td>CS 47</td> <td>10 500€</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td> <td>CS 153</td> <td>18 500€</td> <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td> <td>CS 32</td> <td>15 500€</td> <td>Linklaters</td>
                    </tr>
                </table>

            </DivAmount>
        </WrapperProfile >
    );
};