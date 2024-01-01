import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../partials/Nav";
import { Footer } from "../partials/footer";
import styled from "styled-components";
import Button from "../components/Button";

const YellowBgText = styled.span`
  background-color: #6ccff6;
  padding-left: 12px;
  padding-right: 12px;

  border-radius: 8px;
`;

const Page = () => {
  return (
    <>
      <Navigation />
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col>
            <h1>Frequently Asked Questions</h1>
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the Purpose of the Career Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Key purpose of the Career Expo is to introduce Waqifeen-e-Nau,
                  parents and attendees to the careers Hazrat Khalifatul Masih
                  (aba) has emphasized upon to meet the growing needs of
                  Jama'at.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  When &amp; Where will the Expo be held?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Saturday, January 20th, 2024 and Sunday, January 21st,
                      2024{" "}
                    </li>
                    <li>
                      <strong>In-Person</strong>
                      <br />
                      Masjid Masroor, South Virginia for boys & fathers on
                      Saturday, January 20th, 2024
                      <br />
                      Masjid Masroor, South Virginia for girls & mothers on
                      Sunday, January 21st, 2024
                    </li>
                    <li>
                      <strong>Virtually (Zoom)</strong>
                      <br />
                      For all USA Jama'at members who cannot attend in-person
                      (though we highly encourage in-person attendance). Online
                      programs can be attended by both genders on any day,
                      however, certain topics are only relevant for the
                      respective genders.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Who is leading the closing sessions, Inshallah
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Respected Ameer Sahib USA will inshaAllah preside over the
                      closing session on January 20, 2024
                    </li>
                    <li>
                      Respected Sadr Sahiba Lajna USA will inshaAllah preside
                      over the closing session on January 21, 2024
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What is the format of the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Please refer to the agenda for Boys (Jan 20th) and Girls
                      (Jan 21) for the detailed information on topics, speakers
                      and timings.
                    </li>
                    <li>
                      There are four concurrent sessions/tracks happening at the
                      same time, allowing attendees to pick which track they
                      want to attend. Some tracks are repeated giving an
                      opportunity for attendees to prioritize the sessions.
                    </li>
                    <li>
                      Respected Ameer Sahib USA will join the closing session on
                      January 20, 2024
                    </li>
                    <li>
                      Respected Sadr Sahiba Lajna USA will join the closing
                      session on January 21, 2024
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How can I join the Expo Virtually?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Click the Boys Agenda Link on January 20th. There will be
                      a “LIVE” button on the sessions which are live. Click the
                      Track and Click “Join Now”
                    </li>
                    <li>
                      Click the Girls Agenda Link on January 21st. There will be
                      a “LIVE” button on the sessions which are live. Click the
                      Track and Click “Join Now”
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Can I attend the sessions on both days?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Most of the sessions are for both genders, however, there
                  are few topics that are geared towards respective genders.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Is Registration Required?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      For in-person attendees, registration is required to have
                      your unique badge printed and ready before your arrival.
                      Moreover, this will allow us to plan meals and other
                      logistics.
                    </li>
                    <li>
                      For online attendees, we strongly recommend attendees to
                      register so we can communicate critical updates with you.
                      There is no registration needed to watch sessions online.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>How do I register?</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant={"primary"}
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLSdUWVwngRILWugN5eeVRO4yQHtpy7s4O1aMDCLvTabLKHp92g/viewform"
                    }
                  >
                    Registeration Form
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  What is the benefit of attending Expo in-person at Masjid
                  Masroor?
                </Accordion.Header>
                <Accordion.Body>
                  Attending the Expo in-person at South Virginia will allow you
                  to engage with those presenters and sponsors who are in-person
                  along with interacting with peers &amp; friends.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Can parents also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Parents are encouraged to join both in-person and online.
                  Fathers may join in-person on January 20th, 2024 while mothers
                  may join in-person on January 21st, 2024.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Can non-Waqifeen-e-Nau also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. We invite non-Waqf-e-Nau and their parents to this Expo
                  as well.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  What is the ideal age group to attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Ideal age of the Career Expo is 12 - 26 years old. However,
                  older and some younger Waqifeen-e-Nau may join as well. Having
                  said that, any Waqf-e-Nau younger than 12 who is attending
                  in-person, needs a prior approval from the Waqf-e-Nau
                  Department. Please use the contact us menu to reach out to us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  Can younger or older Waqifeen-e-Nau also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Younger Waqifeen-e-Nau can attend online, however, any
                  Waqf-e-Nau younger than 12 who is attending in-person, needs a
                  prior approval from the Waqf-e-Nau Department. Please use the
                  contact us menu to reach out to us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  Can girls attend the online session on January 20th, 2024 as
                  well?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Most of the sessions are for both genders, however, there
                  are few topics that are geared towards respective genders.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  Can boys attend the online session on January 21st, 2024 as
                  well:?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Most of the sessions are for both genders, however, there
                  are few topics that are geared towards respective genders.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>
                  If attending in-person, when should I plan to arrive for boys
                  program (Jan 20)?
                </Accordion.Header>
                <Accordion.Body>
                  Expo starts at 10 AM EST sharp. Ideally you should arrive by 9
                  AM and join us for breakfast.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>
                  If attending in-person, when should I plan to arrive for girls
                  program (Jan 21)?
                </Accordion.Header>
                <Accordion.Body>
                  Expo starts at 10 AM EST sharp. Ideally you should arrive by 9
                  AM and join us for breakfast.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>
                  Is there any travel subsidy available if I am coming to Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    Unfortunately, there is no individual travel subsidy
                    available for Expo. You may reach out to National Secretary
                    Sahib Waqf-e-Nau for further guidance at{" "}
                    <a href="mailto:national.wn@ahmadiyya.us">
                      national.wn@ahmadiyya.us
                    </a>
                  </li>
                  <li>
                    Please reach out to your Local Secretary Waqf-e-Nau or Local
                    Muavina Sadr for Waqifaat for group travel as there is some
                    limited subsidy available for group travel.{" "}
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>
                  Is there any accommodation provided?
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    Overnight accommodation will be available for Waqifeen-e-Nau
                    boys at the Masjid if accompanied by a parent, a chaperone,
                    a local or a regional secretary Waqf-e-Nau.
                  </li>
                  <li>
                    Waqifat-e-Nau coming in groups should reach out to National
                    Muavina Sadr for Waqifat-e-Nau at{" "}
                    <a href="waqifat@lajnausa.net">waqifat@lajnausa.net</a>{" "}
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>
                  Which airport should I fly into?
                </Accordion.Header>
                <Accordion.Body>
                  You may fly into IAD and DCA. BWI is also an option.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>
                  Is there any transportation from/to airport available?
                </Accordion.Header>
                <Accordion.Body>
                  There is no transportation service from/to the airport
                  available. However, you may reach out to us for assistance if
                  you need any & we will inshallah try to accommodate you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>
                  When should I plan to travel back (if attending in-person)?
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    Closing session with respected Ameer Sahib on Saturday,
                    January 20st will approximately end around 5:30 pm EST.
                  </li>
                  <li>
                    Closing session with respected Sadr Sahiba Lajna USA on
                    Sunday, January 21st will approximately end around 4:30 pm
                    EST.
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>
                  Will the sessions be recorded?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Inshallah. However, they may or may not be uploaded for
                  later viewing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header>
                  Do I need to attend the entire program?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. You should attend the entire program as you may not be
                  aware of certain careers that may interest you. You would also
                  have an opportunity to listen to respected Ameer Sahib USA and
                  Sadr Sahiba Lajna USA.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="24">
                <Accordion.Header>
                  What's new in 2024 Career Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    No registration is required to get a unique link for your
                    own session if watching over Zoom.
                  </li>
                  <li>
                    Each track/session will now be 45 minutes with at least 15 -
                    20 minutes dedicated towards Q&amp;A
                  </li>
                  <li>There will be 10-minutes breaks between each session</li>
                  <li>
                    Our mothers and daughters can now attend in-person on
                    January 21st, 2024
                  </li>
                  <li>
                    Expo Website is redesigned with an ease of use in mind for
                    our members.
                  </li>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Page;
