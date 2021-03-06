import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SectionContainer, FlexGridContainer } from 'components/containers'
import { Card, Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`

const StyledDbot = styled(DBot)`
    width: 48px;
    height: 48px;
`

const StyledDmt5 = styled(DMT5)`
    width: 48px;
    height: 48px;
`

const StyledDTrader = styled(DTrader)`
    width: 48px;
    height: 48px;
`

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
`

const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
`

export const OtherPlatform = ({ header, subHeader, exclude }) => (
    <SectionContainer>
        <HeaderWrapper>
            <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                {header ? header : localize('Check out our other platforms')}
            </StyledHeader>
            {subHeader && (
                <StyledSubHeader as="h4" align="center" weight="500" maxWidth="67.6rem">
                    {localize(
                        'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                    )}
                </StyledSubHeader>
            )}
        </HeaderWrapper>
        <FlexGridContainer content_width="32.8rem" gap="1rem" grid="3" justify="center">
            {exclude.toLowerCase() !== 'dtrader' && (
                <StyledLink to="/dtrader">
                    <Card
                        title={localize('DTrader')}
                        Icon={StyledDTrader}
                        content={[
                            localize(
                                'Start trading now with a powerful, yet easy-to-use platform.',
                            ),
                        ]}
                        is_inline_icon
                        width="32.8rem"
                        min_height="22.4rem"
                    />
                </StyledLink>
            )}
            {exclude.toLowerCase() !== 'dbot' && (
                <StyledLink to="/dbot">
                    <Card
                        title={localize('DBot')}
                        Icon={StyledDbot}
                        content={[localize('Automate your trading ideas without coding.')]}
                        is_inline_icon
                        width="32.8rem"
                        min_height="22.4rem"
                    />
                </StyledLink>
            )}
            {exclude.toLowerCase() !== 'dmt5' && (
                <StyledLink to="/dmt5">
                    <Card
                        title={localize('DMT5')}
                        Icon={StyledDmt5}
                        content={[localize('Trade with the platform of choice for professionals.')]}
                        is_inline_icon
                        width="32.8rem"
                        min_height="22.4rem"
                    />
                </StyledLink>
            )}
        </FlexGridContainer>
    </SectionContainer>
)

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    subHeader: PropTypes.string,
}
