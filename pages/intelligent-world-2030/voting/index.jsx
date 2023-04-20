import { useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';

function Voting() {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const hasVotedCookie = cookies.hasVoted;

    if (hasVotedCookie === 'true') {
      setHasVoted(true);
    }
  }, []);

  const handleClick = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);

      setCookie(null, 'hasVoted', 'true', {
        maxAge: 60 * 60 * 24,
        path: '/',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-80">
        <h1 className="text-3xl font-bold mb-4 text-center">Vote for Your Favourite Huawei Intelligent World Emcee</h1>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-medium cursor-pointer" onClick={handleClick}>
              Emcee Name
            </div>
            <div className="text-lg font-medium">{votes}</div>
          </div>
          <div className="bg-gray-300 h-4 rounded-full">
            <div className="bg-green-500 h-full rounded-full" style={{ width: `${votes}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voting;
