import SwiftUI

struct ContentView: View {
    @State var sepalLength: Double = 0.0
    @State var sepalWidth: Double = 0.0
    @State var petalLength: Double = 0.0
    @State var petalWidth: Double = 0.0
    var body: some View {
        VStack(alignment: .leading) {
            Text("iRIS")
                .frame(maxWidth: .infinity)
                .font(.system(size: 72))
                .fontWeight(.bold)
                .foregroundStyle(
                    LinearGradient(
                        colors: [.blue, .purple],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
            Text("Sepal Length")
            NumberTextField("Sepal Length", value: $sepalLength)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(10)
            Text("Sepal Width")
            NumberTextField("Sepal Width", value: $sepalWidth)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(10)
            Text("Petal Length")
            NumberTextField("Petal Length", value: $petalLength)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(10)
            Text("Petal Width")
            NumberTextField("Petal Width", value: $petalWidth)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(10)
            HStack{
                Spacer()
                Button() {
                    
                } label:{
                    Text("Predict")
                        .font(.system(size: 20))
                        .fontWeight(.bold)
                }
                Spacer()
            }
            .padding()
            .background(LinearGradient(
                colors: [.purple, .blue],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            ))
            .foregroundColor(.white)
            .cornerRadius(10)
            .padding(.top, 30)
        }
        .padding(30)
    }
}

#Preview {
    ContentView()
}


