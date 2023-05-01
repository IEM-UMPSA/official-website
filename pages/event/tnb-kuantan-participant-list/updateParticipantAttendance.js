export default async function updateParticipantAttendance(req, res) {
  const { id } = req.query;
  const { method, body } = req;

  try {
    // Retrieve participant from the database using the provided ID
    const participant = await fetch(`https://example.com/api/participants/${id}`);
    const existingParticipant = await participant.json();

    // If participant not found, return an error
    if (!existingParticipant) {
      return res.status(404).json({ error: `Participant with ID ${id} not found` });
    }

    if (method === 'PATCH') {
      // Merge existing participant data with the updated data from the request body
      const updatedParticipant = { ...existingParticipant, ...body };

      // Update participant data in the database
      const response = await fetch(`https://iemumpss.com/api/participants/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedParticipant),
      });

      // Return the updated participant data
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      // Return an error for unsupported HTTP methods
      return res.status(405).json({ error: `Method ${method} not supported` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
