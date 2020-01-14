import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Left, Right } from 'native-base';
import {Text, ScrollView, Image, View} from 'react-native';


export default class Tab0 extends Component {
    render(){
        return(
            <View>
            <Content padder>
            <ScrollView >
           
                  <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>LIFE INSURANCE</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/li.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        Life insurance is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money in exchange for a premium, 
                        upon the death of an insured person.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>HEALTH INSURANCE</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/hi.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        Health insurance is an insurance that covers the whole or a part of the risk of a person incurring medical expenses,
                         spreading the risk over a large number of persons.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>MOTOR INSURANCE</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/mi.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        Vehicle insurance is insurance for award, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic 
                        collisions and against liability that could also arise from incidents in a vehicle.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>TRAVEL INSURANCE</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/ti.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        Travel insurance is insurance that is intended to cover medical expenses,
                         trip cancellation, lost luggage, flight accident and other losses incurred while traveling, either internationally or domestically.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>PERSONAL ACCIDENT INSURANCE</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/pai.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        Personal Accident insurance or PA insurance is an annual policy which provides compensation in the event of injuries, disability or death caused solely by violent, accidental,
                         external and visible events. It is different from life insurance and medical & health insurance.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>Bond</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/bond.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>       
                 Bond insurance, also known as “financial guaranty insurance,” is a type of insurance whereby an insurance company guarantees scheduled payments of interest
               and principal on a bond or other security in the event of a payment default by the issuer of the bond or security.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>FIXED DEPOSITS</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/fd.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        A fixed deposit is a financial instrument provided by banks or NBFCs which provides investors a higher rate of interest than a regular savings account,
                         until the given maturity date. It may or may not require the creation of a separate account.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>HOME LOANS</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/hl.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        A home loan deposit is your initial contribution to the purchase price of a property. It means that you own a small portion of the home.
                        Some will accept lower deposits but you may have to pay Lenders Mortgage Insurance.
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
                 <Card>
                    <CardItem header bordered>
                    <Left>
                      <Text>MUTUAL FUNDS</Text> 
                      </Left>
                      <Right>
                      <Image
                      style={{width:50, height:50}}
                      source={require('../../assets/images/mf.png')}
                      />
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                        A mutual fund is a professionally managed investment fund that pools money from many investors to purchase securities. 
                        These investors may be retail or institutional in nature
                        </Text>
                      </Body>
                    </CardItem>
                 </Card>
            </ScrollView>
            </Content>
              </View>
        );
    }
}