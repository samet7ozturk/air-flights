export default function FilterOptions() {
  return (
    <>
      <div>
        <p>Sort by:</p>
        <select>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div>
        <p>Arrival Time</p>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          5:00 AM - 11:59 AM
        </label>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          12:00 PM - 4:59 PM
        </label>
      </div>

      <div>
        <p>Stops</p>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          Nonstop
        </label>
        <label>
          <input type="checkbox" id="agree" name="agree" />1 Stop
        </label>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          2+ Stops
        </label>
      </div>

      <div>
        <p>Airlines Included</p>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          Alitalia
        </label>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          Lufthansa
        </label>
        <label>
          <input type="checkbox" id="agree" name="agree" />
          Air France
        </label>
      </div>
    </>
  );
}
