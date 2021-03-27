import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { colors, TextSubtitle2 } from '../ui'
import Header from '../components/Header'
import Card from '../components/Card'
import IllustrationHero from '../assets/illustration-1.svg'
import Button from '../components/Button'

const StyledHero = styled.section`
  height: 600px;
  width: 100%;
  background-image: url(${IllustrationHero});
  background-size: cover;
  background-position: center;
  padding: 64px 0;
  margin: 72px 0 0 0;
`

const StyledHeroTitle = styled.div`
  background-color: rgba(40, 40, 40, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > h5 {
    color: ${colors.gray};
  }
`

const StyledProperties = styled.section`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const StyledPropertiesTitle = styled.div`
  background-color: rgba(40, 40, 40, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  & > h4 {
    color: ${colors.darkPink};
  }
`

const StyledPropertiesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  margin: 0 auto;
`

const StyledSignup = styled.section`
  background-color: ${colors.shallowPink};
  display: grid;
  place-items: center;
  gap: 32px;
  padding: 64px 0;

  & > h4 {
    width: 75%;
    text-align: center;
  }
`

const StyledTeam = styled.section`
  padding: 64px 0;

  & > h3 {
    color: ${colors.darkPink};
    text-align: center;
  }
`

const StyledFooter = styled.footer`
  background-color: ${colors.background};
  border-top: 1px solid ${colors.darkPink};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px 32px;

  & > div {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > section {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <StyledHero>
        <StyledHeroTitle>
          <h2>Meet your new Home</h2>
          <h5>The easiest way to find where you belong</h5>
        </StyledHeroTitle>
      </StyledHero>
      <StyledProperties>
        <StyledPropertiesTitle>
          <TextSubtitle2>Find an Apartment you Love</TextSubtitle2>
          <h4>Homes for rent at the best prices</h4>
        </StyledPropertiesTitle>
        <StyledPropertiesList>
          <Card
            landlord
            type="sale"
            rent="4,000"
            propertyType="house"
            address="Av. Alfredo Mendiola 897 Urb. Palao"
            bedrooms={5}
            bathrooms={2}
            area={100}
          />
          <Card
            landlord
            type="sale"
            rent="4,000"
            propertyType="house"
            address="Av. Alfredo Mendiola 897 Urb. Palao"
            bedrooms={5}
            bathrooms={2}
            area={100}
          />
          <Card
            landlord
            type="sale"
            rent="4,000"
            propertyType="house"
            address="Av. Alfredo Mendiola 897 Urb. Palao"
            bedrooms={5}
            bathrooms={2}
            area={100}
          />
        </StyledPropertiesList>
      </StyledProperties>
      <StyledSignup>
        <h4>Getting someone to rent your apartment has never been this easy</h4>
        <Button large>Create an account now</Button>
      </StyledSignup>
      <StyledTeam>
        <h3>Meet the team</h3>
      </StyledTeam>
      <StyledFooter>
        <div>
          <TextSubtitle2>© 2021 - Find That Home</TextSubtitle2>
          <TextSubtitle2>Source Code</TextSubtitle2>
          <TextSubtitle2>Codeable - Cohort 3 Final Project</TextSubtitle2>
        </div>
        <section>
          <div>
            <TextSubtitle2>Ruby on Rails REST API</TextSubtitle2>
          </div>
          <div>
            <TextSubtitle2>React Responsive SPA</TextSubtitle2>
          </div>
        </section>
      </StyledFooter>
    </Fragment>
  )
}
