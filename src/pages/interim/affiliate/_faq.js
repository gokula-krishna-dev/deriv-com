import React from 'react'
import styled from 'styled-components'
import {
    WhyRebrand,
    IsBeingBought,
    WhatWillHappen,
    WhatChanges,
    WhySwitch,
    WhatsNew,
    CanTrade,
    HowStarted,
    WhatHappenAffiliate,
    DifferentiateCommission,
    AffectIB,
    SupportAPI,
    HavePaymentAgent,
    StartPromoting,
    HowToPromote,
    MarketingSupport,
} from './_faq-data'
import { Container, SectionContainer, Flex } from 'components/containers'
import {
    Header,
    Text,
    Accordion,
    AccordionItem,
    Divider,
    LocalizedLinkText,
} from 'components/elements'
import { localize, Localize } from 'components/localization'
import { binary_url } from 'common/utility'

const Question = styled.div`
    max-width: 38.4rem;
    margin-right: 1.6rem;
`

const Answer = styled.div`
    width: 100%;
    max-width: 69rem;
`

const FAQ = () => {
    const parent_style = {
        marginBottom: '2.4rem',
    }
    const item_style = {
        padding: '2.4rem',
        background: 'var(--color-grey-4)',
    }
    const header_style = {
        padding: '1.6rem 2.4rem',
        border: 'none',
    }
    return (
        <SectionContainer background="var(--color-grey-8)">
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            {localize('What is the rebranding about?')}
                        </Header>
                        <Text>
                            {localize(
                                'The rebranding exercise sees us strengthen our position to provide clients with the flexibility, ease, and confidence to trade as they wish. It is part of our company’s growth process as we step into the third decade of delivering services of value to clients.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Why is <0>Binary.com</0> rebranding?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhyRebrand />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Is <0>Binary.com</0> being bought over by another company?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <IsBeingBought />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="What will happen to <0>Binary.com</0>?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatWillHappen />
                            </AccordionItem>
                            <AccordionItem
                                header={localize('What changes are being introduced?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatChanges />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            {localize('How will it affect my clients?')}
                        </Header>
                        <Text>
                            <Localize
                                translate_text="We understand that clients may be overwhelmed by the change. That’s why we’ve worked very hard to make sure that their transition to <0>Deriv.com</0> is as seamless as possible. As an affiliate, you play a key role in supporting them in this transition. Below are some concerns they may have, along with the answers to convey your assurance."
                                components={[<LocalizedLinkText key={0} to="/" />]}
                            />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Why should I switch to <0>Deriv.com</0>?"
                                        components={[<LocalizedLinkText key={0} to="/" />]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhySwitch />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="What’s new on <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatsNew />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Can I still trade on <0>Binary.com</0>?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <CanTrade />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="How do I get started on <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <HowStarted />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            {localize('How does it transform our partnership?')}
                        </Header>
                        <Text>
                            {localize(
                                'As our valued partner, you will no doubt have concerns about the status of your partnership with Deriv.com. Don’t worry, we’ve made the transition as seamless as possible for you so you can continue to build your network and increase your earning potential.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('What will happen to my affiliate account?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatHappenAffiliate />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="How can I differentiate <1>Deriv.com</1> commission from that of <0>Binary.com</0>?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <DifferentiateCommission />
                            </AccordionItem>
                            <AccordionItem
                                header={localize(
                                    'How does this change affect me as an introducing broker (IB)?',
                                )}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <AffectIB />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Does <0>Deriv.com</0> support API developers?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <SupportAPI />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Does <0>Deriv.com</0> have a payment agent programme?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <HavePaymentAgent />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            <Localize
                                translate_text="How do I get started promoting <0>Deriv.com</0>?"
                                components={[<LocalizedLinkText key={0} weight="bold" to="/" />]}
                            />
                        </Header>
                        <Text>
                            {localize(
                                'Rest assured that your partnership is pivotal in this rebranding process. In fact, we believe this is an opportunity for you to strengthen your own position within your network of clients. And you can certainly count on us to be responsive and supportive of you in this effort.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Can I start promoting <0>Deriv.com</0> immediately?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <StartPromoting />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="How do I promote <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <HowToPromote />
                            </AccordionItem>
                            <AccordionItem
                                header={localize('What marketing support do you provide?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <MarketingSupport />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default FAQ
