import PageLayout from "../components/PageLayout";

export default function Info() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <p>Here are the frequently asked questions for new scouts in Pack 365:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>What should I expect when my child joins the cub scouts?</strong>
          <p>New scouts should expect to learn about teamwork, outdoor skills, and community service. They will also make new friends and have fun!</p>
        </li>
        <li>
          <strong>What is my child's obligation to the pack?</strong>
          <p>We expect all scouts to attend meetings regularly, participate in pack activities, and uphold the values of scouting.</p>
        </li>
        <li>
          <strong>How are funds raised for the pack?</strong>
          <p>Funds are raised primarily through popcorn sales at the beginning of the scouting year. Each scout is expected to run 3 shifts of popcorn sales. Popcorn sales offset prices of all scouting activities throughout the year. Fundraising efforts are crucial to keeping our pack running smoothly and teach the scouts valuable skills.</p>
        </li>
        <li>
          <strong>What is expected of parents?</strong>
          <p>We expect parents to support their scouts by attending meetings, helping with fundraising efforts, and encouraging their child's participation in pack activities.</p>
        </li>
        <li>
          <strong>What should I expect on a campout?</strong>
          <p>Campouts are a great opportunity for scouts to learn outdoor skills, work as a team, and have fun! Meals are provided by the pack, but families are welcome to bring their own as well.</p>
        </li>
        <li>
          <strong>What activities are done on campouts?</strong>
          <p>Campouts typically include hiking, fishing, campfire cooking, and various team-building games. Scouts also work on outdoor skills and may earn merit badges during these trips.</p>
        </li>
        <li>
          <strong>What can I do to contribute?</strong>
          <p>There are many ways to contribute to Pack 365! You can volunteer to help with events, assist in organizing activities, or provide snacks for meetings. Every little bit helps and is greatly appreciated!</p>
        </li>
      </ul>
    </PageLayout>
  );
}
