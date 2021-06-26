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
    p {
        padding: 5px;
    }
    input {
        padding: 5px;
    }
`;

const AdressInfo = styled.div`
    margin-top: 57px;
    margin-left: 40px;
    p {
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
    input{
        ${fontSize[12]};
        color: ${Colors.textBlue};
        background-color: ${Colors.aquaBody};
        grid-column: 1;
        padding: 5px;
    }
    .input2{
        font-size: ${fontSize[12]};
        color: ${Colors.textBlue};
        background: ${Colors.aquaBody};
        grid-column: 2;
        padding: 5px;
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

    }
`;

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
    const [city, setCity] = useState<string>('');
    const [relation, setRelation] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [turnEditionContent, setTurnEditionContent] = useState(false);

    const [expertise, setExpertise] = useState<string>('');
    const [specialities, setSpecialities] = useState<string>('');
    const [specialitiesT, setSpecialitiesT] = useState<string>('');
    const [admission, setAdmission] = useState<string>('');
    const [admissionT, setAdmissionT] = useState<string>('');
    const [counties, setCounties] = useState<string>('');
    // const [hourlyFee, setHourlyFee] = useState<string>('');
    // const [terms, setTerms] = useState<string>('');
    // const [services, setServices] = useState<string>('');
    // const [attachment, setAttachment] = useState<string>('');
    // const [proposals, setProposals] = useState<string>('');
    // const [internalReviews, setinternalReviews] = useState<string>('');
    // const [amount, setAmount] = useState<string>('');

    const dispatch = useDispatch();

    useEffect(() => {
        setTurnEditionProfile(false);
        setTurnEditionContent(false);
        setName(usersList[9]?.name);
        setCompany(usersList[9]?.company.name);
        setCity(usersList[9]?.address.city);
        setRelation('Partner');
        setEmail(usersList[9]?.email);
        setPhone(usersList[9]?.phone);
        setExpertise('Merges and acquisition');
        setSpecialities('Cross border operation');
        setSpecialitiesT('Transaction over 500M€/$');
        setAdmissionT('Tunisian bar association');
        setAdmission('Paris bar association');
        setCounties('Tunisia');
    }, [usersList]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetSomeImg>(getSomeImg());
    }, [dispatch]);

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
        else if (ev === "btnOnEditionContent" || ev === "btnOnEditionContentImg")
            turnEditionContent ? setTurnEditionContent(false) : setTurnEditionContent(true);
    }

    const changeItemsFromContent = (event: ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'expertise':
                setExpertise(event.target.value);
                break;
            case 'specialities':
                setSpecialities(event.target.value);
                break;
            case 'specialitiesT':
                setSpecialitiesT(event.target.value);
                break;
            case 'admission':
                setAdmission(event.target.value);
                break;
            case 'admissionT':
                setAdmissionT(event.target.value);
                break;
            case 'counties':
                setCounties(event.target.value);
                break;
            // case 'hourlyFee':
            //     setHourlyFee(event.target.value);
            //     break;
            // case 'terms':
            //     setTerms(event.target.value);
            //     break;
            // case 'services':
            //     setServices(event.target.value);
            //     break;
            // case 'attachment':
            //     setAttachment(event.target.value);
            //     break;
            // case 'proposalsName':
            // case 'proposalsEntity':
            // case 'proposalsLocation':
            // case 'proposalsExpertise':
            // case 'proposalsDate':
            // case 'proposalsFirm':
            //     setProposals(event.target.value);
            //     break;
            // case 'internalReviewsName':
            // case 'internalReviewsEntity':
            // case 'internalReviewsLocation':
            // case 'internalReviewsExpertise':
            // case 'internalReviewsDate':
            //     setinternalReviews(event.target.value);
            //     break;
            // case 'amountYear':
            // case 'amountCostCenter':
            // case 'amountTotalAmount':
            // case 'amountLawFirm':
            //     setAmount(event.target.value);
            //     break;

            default:
                console.log("has no Change");;
        }
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
                    <EditButton id='btnOnEditionContent' onClick={(ev: any) => editBtn(ev)}><img id='btnOnEditionContentImg' src='./media/icons/edit.png' alt='' /></EditButton>
                    <h4>Expertise</h4>
                    {turnEditionContent !== true ?
                        <BlueSpan>{expertise}</BlueSpan>
                        :
                        <input key='input7' value={expertise} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'expertise')} />
                    }
                    <h4>Specialities</h4>
                    {turnEditionContent !== true ?
                        <BlueSpan>{specialities}</BlueSpan>
                        :
                        <input key='input8' value={specialities} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'specialities')} />
                    }
                    {turnEditionContent !== true ?
                        <BlueSpan2>{specialitiesT}</BlueSpan2>
                        :
                        <input className='input2' key='input9' value={specialitiesT} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'specialitiesT')} />
                    }
                    <h4>Admission to practice law</h4>
                    {turnEditionContent !== true ?
                        <BlueSpan>{admission}</BlueSpan>
                        :
                        <input key='input10' value={admission} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'admission')} />
                    }
                    {turnEditionContent !== true ?
                        <BlueSpan2>{admissionT}</BlueSpan2>
                        :
                        <input className='input2' key='input11' value={admissionT} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'admissionT')} />
                    }
                    <h4>Counties</h4>
                    {turnEditionContent !== true ?
                        <BlueSpan>{counties}</BlueSpan> :
                        <input key='input12' value={counties} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => changeItemsFromContent(event, 'counties')} />
                    }

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
                    <tbody>
                        <tr><td>Year</td><td>Cost center</td><td>Total amount</td><td>Law firm</td></tr>
                        <tr><td>2019</td><td>CS 153</td><td> 3 500€</td><td>Clifford chance</td></tr>
                        <tr><td>2018</td><td>CS 153</td><td> 9 500€</td><td>Linklaters</td></tr>
                        <tr><td>2017</td><td>CS 47</td><td>10 500€</td><td>Linklaters</td></tr>
                        <tr><td></td><td>CS 153</td><td>18 500€</td><td>Linklaters</td></tr>
                        <tr><td></td><td>CS 32</td><td>15 500€</td><td>Linklaters</td></tr>
                    </tbody>
                </table>
            </DivAmount>
        </WrapperProfile >
    );
};
