# Use the official Python image with the desired version (3.10.12 in this case)
FROM python:3.10.12

# Set the working directory inside the container
WORKDIR /app



# Install the required Python packages
RUN pip install --no-cache-dir Flask Flask-Cors joblib matplotlib numpy pandas Pillow scikit-learn==1.2.2 seaborn Werkzeug

# Copy the entire project into the container (assuming your project files are in the same directory as the Dockerfile)
COPY . .

# Expose the port your Flask app is listening on (modify this to match the port your Flask app uses)
EXPOSE 5000

# Define the command to run your Flask app when the container starts
CMD ["python", "app.py"]
