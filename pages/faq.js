import React, { useEffect } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../partials/Nav";
import { Footer } from "../partials/footer";
import Button from "../components/Button";
import Image from "next/image";

const captureAccordionOpen = (id) => {
  fetch(
    `https://api.counterapi.dev/v1/wn-expo-site-${window.location.hostname}/faq-${id}/up`
  );
};

const Page = () => {
  useEffect(() => {
    fetch(
      `https://api.counterapi.dev/v1/wn-expo-site-${
        window.location.hostname
      }/pagelocation${window.location.pathname.replace(/\//, ".")}/up`
    );
  }, []);
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
              <Accordion.Item eventKey="24">
                <Accordion.Header onClick={() => captureAccordionOpen("24")}>
                  What's new in 2025 Career Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Expo is now a two-day event for both Male and Female
                      participants attending in-person and over Zoom on both
                      days.
                    </li>
                    <li>
                      Male will attend in-person at{" "}
                      <strong>Masjid Mubarik, North Virginia</strong> while
                      Female participants will attend in-person at{" "}
                      <strong>Masjid Masroor, South Virginia</strong>.
                    </li>
                    <li>
                      Hazrat Khalifatul Masih (aba) is sending a representative:{" "}
                      <strong>Missionary Musharaf Ahmed Sahib</strong> of the
                      International Waqf-e-Nau Department, UK.
                    </li>
                    <li>
                      New Presenters and New Career Tracks are added this year.
                    </li>
                    <li>
                      Exhibition Halls will be in both Mosques for interactive
                      engagement with presenters and partner organizations.
                    </li>
                    <li>
                      Registration is required for in-person attendees for
                      logistical planning and printing Expo Pass ahead of time.
                    </li>
                    <li>
                      Each track/session will now be 45 minutes with at least 15
                      - 20 minutes dedicated towards Q&A.
                    </li>
                    <li>
                      There will be 10-minute breaks between each session.
                    </li>
                    <li>
                      Parents of Waqifeen-e-Nau & Non-Waqifeen-e-Nau are also
                      welcomed to attend as well.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header onClick={() => captureAccordionOpen("4")}>
                  How can I join the Expo Virtually?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    No registration is required to join Virtually. When joining
                    the Zoom Sessions, please change your name to your name and
                    add the number of people with you watching together in
                    parentheses like Ahmed Khan (3). Moreover, there will be a
                    survey at the end of Expo that needs to be filled out.
                  </p>
                  <h3>Step # 1</h3>
                  <p>
                    {" "}
                    Click on the Day 1 (April 19) or Day 2 Agenda (April 20) on
                    expo.waqfenau.us either on the Top Menu or the links in the
                    middle of the page:
                  </p>
                  <Image
                    src="/images/faqs/step-1.png"
                    width={400}
                    height={300}
                  />
                  <p>
                    <strong>Or on mobile:</strong>
                  </p>
                  <Image
                    src="/images/faqs/step-1-mobile.png"
                    width={300}
                    height={400}
                  />

                  <h3>Step # 2</h3>
                  <p>
                    Scroll down to the current Eastern Time Zone and you will
                    see the "Live Button". Click on the Session/Track you want
                    to Join.
                  </p>
                  <Image
                    src="/images/faqs/step-2.png"
                    width={500}
                    height={200}
                  />

                  <h3>Step # 3</h3>
                  <p>
                    Once you click, a new window will open up, you can then
                    click "Join Now" to open the Zoom Meeting. 5 Minute before
                    the start of each session, you will see the opportunity to
                    Join. Each Zoom Meeting is a different Meeting from the
                    other.
                  </p>
                  <Image
                    src="/images/faqs/step-3.png"
                    width={400}
                    height={500}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => captureAccordionOpen("0")}>
                  What is the Purpose of the Career Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Key purpose of the Career Expo is to introduce Waqifeen-e-Nau,
                  parents and attendees to the careers Hazrat Khalifatul Masih
                  (aba) has emphasized upon to meet the growing needs of
                  Jama&apos;at.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => captureAccordionOpen("1")}>
                  When &amp; Where will the Expo be held?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Saturday, April 19th, 2025 and Sunday, April 20th, 2025{" "}
                    </li>
                    <li>
                      <strong>In-Person</strong>
                      <br />
                      In Person Girls Session : Masjid Masroor, South Virginia
                      for Saturday, April 19th and Sunday, April 20th, 2025
                      <br />
                      In Person Boys Session : Masjid Mubarak, North Virginia
                      for Saturday, April 19th and Sunday, April 20th, 2025
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
                <Accordion.Header onClick={() => captureAccordionOpen("2")}>
                  Who is leading the closing sessions, Inshallah
                </Accordion.Header>
                <Accordion.Body>
                  Special Guest from UK, Respected Musharaf Sahib
                  -Representative of Hazrat Khalifatul Masih V (aba)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header onClick={() => captureAccordionOpen("3")}>
                  What is the format of the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Please refer to the agenda for Day1 &amp; Day2 for the
                      detailed information on topics, speakers and timings.
                    </li>
                    <li>
                      There are four concurrent sessions/tracks happening at the
                      same time, allowing attendees to pick which track they
                      want to attend. Some tracks are repeated giving an
                      opportunity for attendees to prioritize the sessions.
                    </li>
                    <li>
                      Respected Sadr Sahiba Lajna USA will join the closing
                      session on January 21, 2024
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header onClick={() => captureAccordionOpen("5")}>
                  Can I attend the sessions on both days?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Most of the sessions are for both genders, however, there
                  are few topics that are geared towards respective genders.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header onClick={() => captureAccordionOpen("6")}>
                  Is Registration Required?
                </Accordion.Header>
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
                <Accordion.Header onClick={() => captureAccordionOpen("7")}>
                  How do I register?
                </Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant={"primary"}
                    href={"https://forms.gle/7gEFGU1v8nntyLXTA"}
                  >
                    Registeration Form
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header onClick={() => captureAccordionOpen("8")}>
                  What is the benefit of attending Expo in-person?
                </Accordion.Header>
                <Accordion.Body>
                  Attending the Expo in-person will allow you to engage with
                  those presenters and sponsors who are in-person along with
                  interacting with peers &amp; friends.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header onClick={() => captureAccordionOpen("9")}>
                  Can parents also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Parents are encouraged to join both in-person and online.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header onClick={() => captureAccordionOpen("10")}>
                  Can non-Waqifeen-e-Nau also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. We invite non-Waqf-e-Nau and their parents to this Expo
                  as well.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header onClick={() => captureAccordionOpen("11")}>
                  What is the ideal age group to attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Ideal age of the Career Expo is 12 - 26 years old. However,
                  older and some younger Waqifeen-e-Nau may join as well. Having
                  said that, any Waqf-e-Nau younger than 10 who is attending
                  in-person, needs a prior approval from the Waqf-e-Nau
                  Department. Please use the contact us menu to reach out to us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header onClick={() => captureAccordionOpen("12")}>
                  Can younger or older Waqifeen-e-Nau also attend the Expo?
                </Accordion.Header>
                <Accordion.Body>
                  Younger Waqifeen-e-Nau can attend online, however, any
                  Waqf-e-Nau younger than 12 who is attending in-person, needs a
                  prior approval from the Waqf-e-Nau Department. Please use the
                  contact us menu to reach out to us.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header onClick={() => captureAccordionOpen("15")}>
                  If attending in-person, when should I plan to arrive for boys
                  program at Masjid Mubarik?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Expo starts at 11 AM EST sharp on Saturday, April 19th.
                      Ideally you should arrive by 9:45 AM for check-in and join
                      us for breakfast.
                    </li>
                    <li>
                      On Sunday, April 20th, the check-in is at 8:00 AM and the
                      first session is at 9:00 AM with the closing session at
                      12:00 PM.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header onClick={() => captureAccordionOpen("16")}>
                  If attending in-person, when should I plan to arrive for girls
                  program at Masjid Masroor?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Expo starts at 11 AM EST sharp on Saturday, April 19th.
                      Ideally you should arrive by 9:45 AM for check-in and join
                      us for breakfast.
                    </li>
                    <li>
                      On Sunday, April 20th, the check-in is at 8:00 AM and the
                      first session is at 9:00 AM with the closing session at
                      12:00 PM
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header onClick={() => captureAccordionOpen("17")}>
                  Is there any travel subsidy available if I am coming to Expo?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Group Travels are being planned for both Boys & Girls from
                      your Region/Jama&apos;at, so please plan to come with
                      them.
                    </li>
                    <li>
                      There is a very limited individual travel subsidy
                      available for Expo. You may reach out to National
                      Secretary Sahib Waqf-e-Nau for further guidance at{" "}
                      <a href="mailto:national.wn@ahmadiyya.us">
                        national.wn@ahmadiyya.us
                      </a>
                      .
                    </li>
                    <li>
                      In order to receive a subsidy, you need prior approval and
                      must have requested it at least 7 weeks before the Career
                      Expo.
                    </li>
                    <li>
                      Please reach out to your Local Secretary Waqf-e-Nau or
                      Local Muavina Sadr for Waqifaat for group travel.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header onClick={() => captureAccordionOpen("18")}>
                  Is there any accommodation provided?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Overnight accommodation will be available for
                      Waqifeen-e-Nau boys at Masjid Mubarik if accompanied by a
                      parent, a chaperone, a local, or a regional Secretary
                      Waqf-e-Nau.
                    </li>
                    <li>
                      Waqifat-e-Nau would also be provided accommodation if
                      registered well in advance.
                    </li>
                    <li>
                      Those coming in groups should reach out to National
                      Muavina Sadr for Waqifat-e-Nau at{" "}
                      <a href="mailto:waqifat@lajnausa.net">
                        waqifat@lajnausa.net
                      </a>{" "}
                      and Waqf-e-Nau Department at{" "}
                      <a href="mailto:wn.events@ahmadiyya.us">
                        wn.events@ahmadiyya.us
                      </a>
                      .
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header onClick={() => captureAccordionOpen("19")}>
                  Which airport should I fly into?
                </Accordion.Header>
                <Accordion.Body>
                  You may fly into IAD and DCA. BWI is also an option. However,
                  pickup and drop-off will be offered from IAD only and case by
                  case form DCA.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header onClick={() => captureAccordionOpen("20")}>
                  Is there any transportation from/to airport available?
                </Accordion.Header>
                <Accordion.Body>
                  There is no transportation service from/to the airport
                  available. However, you may reach out to us for assistance if
                  you need any & we will inshallah try to accommodate you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header onClick={() => captureAccordionOpen("21")}>
                  When should I plan to travel back (if attending in-person)?
                </Accordion.Header>
                <Accordion.Body>
                  Closing session with respected Musharaf Sahib on Sunday, April
                  20st will approximately end around 1:30 PM EST. You should
                  plan to leave after that.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header onClick={() => captureAccordionOpen("22")}>
                  Will the sessions be recorded?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Inshallah. However, they may or may not be uploaded for
                  later viewing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header onClick={() => captureAccordionOpen("23")}>
                  Do I need to attend the entire program?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. You should attend the entire program as you may not be
                  aware of certain careers that may interest you. You would also
                  have an opportunity to listen to respected Musharaf Ahmed
                  Sahib from the UK, the representative of Hazrat Khalifatul
                  Masih (aba).
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
